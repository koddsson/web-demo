# frozen_string_literal: true

class Flash < Shadow::Base
  def initialize(variant: :default)
    @variant = variant
  end

  renders_one :icon, lambda { |name:|
    Octicon.new name, slot: "icon"
  }
end
