# Compatibility shim for Ruby versions where Object#tainted? was removed
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end
