# frozen_string_literal: true

class Octicon < Shadow::Base
  def initialize(name, slot:"")
    @name = name.to_s
    @slot = slot if slot.present?
  end
end
