AFRAME.registerComponent("card", {
    schema: {
        width: {
            type: "number",
            default: 1,
        },
        height: {
            type: "number",
            default: 1,
        },
        depth: {
            type: "number",
            default: 1,
        },
        color: {
            type: "color",
            default: "#AAA",
        },
        sound: {},
    },
    init: function() {
        var data = this.data;
        var el = this.el;

        // Create geometry.
        this.geometry = new THREE.BoxBufferGeometry(
            data.width,
            data.height,
            data.depth
        );

        // Create material.
        this.material = new THREE.MeshStandardMaterial({
            color: data.color,
        });

        // Create mesh.
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        // Set mesh on entity.
        el.setObject3D("mesh", this.mesh);
    },
    update: function(oldData) {
        var data = this.data;
        var el = this.el;
        // If `oldData` is empty, then this means we're in the initialization process.
        // No need to update.
        if (Object.keys(oldData).length === 0) {
            return;
        }

        console.log(oldData);
    },
});