source "https://rubygems.org"

# Enforce the Ruby version.
# This should match .github/workflows/deploy.yml and ./init.sh.
ruby "4.0.1"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

# Core dependencies and shims.
gem "jekyll"
gem "minima"
gem "bundler"
gem "base64"
gem "csv"
gem "webrick"
gem "wdm", :platforms => [:windows]

# Syntax highlighting.
gem "rouge"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby timezone support.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
