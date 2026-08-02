# Monkeypatch Liquid::Variable#taint_check to be safe when objects don't respond to `tainted?`
if defined?(Liquid::Variable)
  Liquid::Variable.class_eval do
    def taint_check(obj)
      return unless obj.respond_to?(:tainted?) && obj.tainted?
      obj
    end
  end
end
