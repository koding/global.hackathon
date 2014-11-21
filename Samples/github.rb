# Github is online project hosting using Git. Includes
# source-code browser, in-line editing, wikis, and ticketing.
#
# This example uses their ruby sdk to authenticate a user
# and make requests on their behalf.
#
# Please see these for more information:
#
# https://developer.github.com/v3/
# https://github.com/octokit/octokit.rb

require 'octokit'
require 'pry'

Octokit.configure do |c|
  c.login    = '<YOUR USERNAME>'
  c.password = '<YOUR PASSWORD>'
end

user = Octokit.user
puts user

repo = Octokit.repo 'koding/global.hackathon'
puts repo
