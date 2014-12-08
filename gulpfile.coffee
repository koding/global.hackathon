#
# # Gulpfile
#
path    = require 'path'
glob    = require 'glob'
gulp    = require 'gulp'
concat  = require 'gulp-concat'
tap     = require 'gulp-tap'
util    = require 'gulp-util'



# The handler for gulp-tap
tap_json = (file, t) ->
  filename = path.basename file.path
  if filename is 'README.template.md' then return

  try
    data = JSON.parse file.contents.toString()
  catch e
    util.log util.colors.red('Warning'), "Failed to parse json file.
      Invalid JSON syntax. File: #{file.path}"
    file.contents = new Buffer ''
    return

  str = format_json data, file.path
  if not str?
    util.log util.colors.red('Warning'), "The JSON data couldn't be formatted
      into the table for an unknown reason. File: #{file.path}"
    file.contents = new Buffer ''
    return

  # Everything is successful
  file.contents = new Buffer str


# Format a member object into a link
format_member = (member) ->
  if member.koding?
    "[#{member?.name}](https://koding.com/#{member?.koding})"
  else
    member?.name



# Format a data object, and return a string to be
# appended to the readme
format_json = (data, filepath) ->
  teamPathName = path.basename path.dirname filepath

  # We're ignoring multiple matches, since we only want to
  # load the first one
  aboutName = glob.sync("./Teams/#{teamPathName}/about.md", nocase: true)[0]
  # If we cannot find an about file, match any md file
  aboutName = glob.sync("./Teams/#{teamPathName}/*.md")[0] if not aboutName?
  # Not get just the path from it.
  aboutName = path.basename aboutName if aboutName?

  # Get the lead, ahead of time.
  teamLead = null
  if data.members? and data.members instanceof Array
    for member, i in data.members
      if member.lead is true
        teamLead = member
        data.members.splice i, 1
        data.members.unshift teamLead
        break

  output = '|'
  # First column, #TeamName
  if data.teamName?
    output += " <a target='_blank'
      href='https://twitter.com/home?status=Go team
      %23#{data.teamName.replace /\W+/g, ""}
      for @koding %23hackathon\
      #{if teamLead?.twitter? then " led by @"+teamLead.twitter else ''}
      https://koding.com/Hackathon'>
      <img src='https://g.twimg.com/Twitter_logo_blue.png' height='14'/>
      ##{data.teamName}
      </a> |"
  else
    output += " |"

  # Second column, TeamMembers
  if data.members? and data.members instanceof Array
    for member in data.members
      output += format_member member
      output += " #{member.location}" if member.location?
      output += " *(team lead)*"      if member.lead is true
      output += "<br>"
  output += " |"

  # Third column, TeamPage
  if aboutName?
    if data.teamName? then teamName = data.teamName
    else teamName = teamPathName
    output += " [#{teamName}](./Teams/#{teamPathName}/#{aboutName}) |"

  # Add a newline to end this row.
  output += '\n'
  # Return the final output
  output

# ## Tap Teams
# Modify the markdown of the teams (brute forcing currently)
tap_teams = (file, t) ->
  markdown = file.contents.toString()
  # Example string:   ![Alt Text](source.jpg)
  # Expected groups:   (Alt Text)(source.jpg)
  image_regex = ///
    !\[(        # Match opening alt text, with group for text
    [\w\W^\]]   # Any character that's not a closing bracket
    *?          # Zero or more times, non-greedy
    )\]         # Closing alt text, close group
    \((         # Opening paren, and open group
    [\w\W^\)]   # Any character that's not a closing paren
    *?          # Zero or more times, non-greedy
    )\)         # Closing paren, closing group
  ///g

  while match = image_regex.exec markdown
    [orig, alt, source] = match
    # Need to eventually escape alt and source
    replaceWith = "<img
      width=\"100\" height=\"100\"
      src='#{source}' alt='#{alt}'/>"
    markdown = markdown.replace orig, replaceWith

  file.contents = new Buffer markdown


# ## Generate the readme from the template and team json files
gulp.task 'readme', ->
  gulp.src [
    'README.template.md'
    './Teams/**/TeamKoders/team.json'
    './Teams/**/team.json'
  ]
    .pipe tap tap_json
    .pipe concat 'README.md', newLine: ''
    .pipe gulp.dest './'


# ## Generate the TEAMS.md
gulp.task 'teams', ->
  gulp.src [
    './Teams/**/TeamKoders/ABOUT.md'
    './Teams/**/ABOUT.md'
  ]
    .pipe tap tap_teams
    .pipe concat 'TEAMS.md', newLine: "\n\n#{Array(40).join("-")}\n\n"
    .pipe gulp.dest './'


gulp.task 'default', ['readme', 'teams']
