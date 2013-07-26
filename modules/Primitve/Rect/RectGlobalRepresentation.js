(function(window) {
    var RectGlobalRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = {};

        me._x = O.x || 0;
        me._y = O.y || 0;
        me._width = O.width || 10;
        me._height = O.height || 10;
        me._angle = O.radAngle || (O.gradAngle || 0) * Math.PI/180;
        me._fillObject = O.fillObject || "default";
        me._strokeObject = O.strokeObject || "default";
        me._clipObject = O.clipObject || null;

        me.Update = function(points, visualProperties, mvMatrix) {
            gizmo.Filter(points,"Object");
            gizmo.Filter(visualProperties,"Object");
            gizmo.Filter(mvMatrix,"Object");

            // Метод не реализован
            console.log("Virtual method Update of RectGlobalRepresentation");

            return this;
        }

        return me;

    }

    ArmContext.RectGlobalRepresentation = RectGlobalRepresentation;
})();
