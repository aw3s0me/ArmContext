(function(window) {
    var RectInternalRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = new ArmContext.InternalRepresentation({});
        
        me.GetWidth = function() {
            return this._width;
        };
        
        me.SetWidth = function(O) {
            gizmo.Filter(O, "Number");
            this.Update({ width: O, height: this.GetHeight() });
        };

        me.GetHeight = function() {
            return this._height;
        };
        
        me.SetHeight = function(O) {
            gizmo.Filter(O, "Number");
            this.UpdatePoints({x: this.GetX(), y: this.GetY(), width: this.GetWidth(), height: O});
        };

        me.GetPointsOfMatrix = function() {
            return this._points;
        };

        me.SetPointsOfMatrix = function(O) {
            gizmo.Filter(O, "Array");
            return this._points;
        };

        me.Set = function(O) {
            this._width = O.width || this._width;
            this._height = O.height || this._height;

            this._points = new $M( [
                [0,0,1],
                [this._width,0,1],
                [this._width,this._height,1],
                [0,this._height,1]
            ] );
        };

        me.Set({width: O.width || 10, height: O.height || 10 });

        return me;
    }

    ArmContext.RectInternalRepresentation = RectInternalRepresentation;
})();
