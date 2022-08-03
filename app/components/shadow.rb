# frozen_string_literal: true

module Shadow
  class Base < ViewComponent::Base
    def shadow
      content_tag(:template, {shadowroot: "open"}) do
        "#{style}#{template}".html_safe
      end
    end

    private

    def template
      read(".html")
    end

    def style
      content_tag(:style) do
        read(".css")
      end
    end

    def read(ext)
      path = "app/shadows/#{self.class.name.downcase}/index#{ext}"
      puts path
      begin
        File.read(path).html_safe
      rescue
        ""
      end
    end
  end
end
