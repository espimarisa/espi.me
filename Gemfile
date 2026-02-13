source "https://rubygems.org"
git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

# Read minimum Ruby version from .ruby-version.
ruby file: ".ruby-version"

gem "base64"
gem "bundler"
gem "csv"
gem "jekyll"
gem "minima"
gem "rouge"
gem "wdm", :platforms => [:windows]
gem "webrick"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows and JRuby timezone support.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
