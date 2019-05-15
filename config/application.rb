require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Jinseitou
  class Application < Rails::Application
    config.load_defaults 5.2
    config.autoload_paths << Rails.root.join('lib')
    config.assets.unknown_asset_fallback = true
    config.i18n.default_locale = :ja
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]
    config.generators do |g|
      g.assets     false
      g.helper     false
      g.test_framework false
    end
  end
end
