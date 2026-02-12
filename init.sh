#!/bin/sh

# Run in strict mode.
set -eu

# Sets the minimum required Ruby version.
# https://endoflife.date/ruby
REQUIRED_RUBY="4.0.0"

# Check if Ruby is installed.
if ! command -v ruby >/dev/null 2>&1; then
	echo "Error: Ruby is not installed."
	exit 1
fi

# Check Ruby version, >= using the internal Gem::Version class.
if ! ruby -e "exit(Gem::Version.new(RUBY_VERSION) >= Gem::Version.new(\"$REQUIRED_RUBY\"))"; then
	CURRENT_VER="$(ruby -e "print RUBY_VERSION")"
	echo "Error: Ruby >= $REQUIRED_RUBY is required."
	echo "You are currently running version: $CURRENT_VER."
	exit 1
fi

# Check for a Bundler install.
if ! command -v bundle >/dev/null 2>&1; then
	echo "Bundler not found. Attempting to install..."
	gem install bundler

	# Add the user gem path to the PATH temporarily.
	export PATH="$(ruby -e "puts Gem.user_dir")/bin:$PATH"
fi

# Bundle dependencies.
echo "Bundling dependencies..."
bundle install

# Execute a command based on a switch.
COMMAND="${1:-build}"

case "$COMMAND" in

build)
	echo "Building Jekyll site..."
	bundle exec jekyll build
	;;
clean)
	echo "Cleaning Jekyll site..."
	bundle exec jekyll clean
	;;
serve)
	echo "Serving Jekyll site..."
	bundle exec jekyll serve
	;;
*)
	echo "Usage: $0 build|clean|serve}"
	exit 1
	;;
esac

echo "Success!"
