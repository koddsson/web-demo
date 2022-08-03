# frozen_string_literal: true

class Flash < Shadow::Base
  def initialize(variant: :default)
    @variant = variant
  end
end
