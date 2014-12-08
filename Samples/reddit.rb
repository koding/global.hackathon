# Reddit is the front page of the internet.
# It is a collection of interest-based communities.
#
# This is a collection of simple examples using ruby
# and the reddit-kit gem to make simple reddit requests.
#
# For more information please visit:
#
# https://www.reddit.com/dev/api
# https://github.com/samsymons/RedditKit.rb

require 'redditkit'

RedditKit.sign_in '<YOUR USERNAME>', '<YOUR PASSWORD>'

front_page_links = RedditKit.front_page
front_page_links.each do |link|
  puts "#{link.author} : #{link.title} - #{link.score} (#{link.num_comments} comments)"
end

cool_user = RedditKit.user 'joot78'
puts "#{cool_user.name} is a mod on r/spiders"

results = RedditKit.search 'koding hackathon'
results.each do |result|
  puts "r/#{result.subreddit} : #{result.title} (#{result.num_comments} comments)"
end