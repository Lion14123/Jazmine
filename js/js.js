new Vue({
    el: '#app',
    data: {
        tareas: [
            { nombre: "Modelado digital", completada: false },
            { nombre: "Frameworks", completada: false },
            { nombre: "Inglés", completada: false },
            { nombre: "DARA", completada: false },
            { nombre: "FOSO", completada: false }
        ]
    },
    computed: {
        tareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completada).length;
        },
        totalTareas() {
            return this.tareas.length;
        },
        porcentajeCompletado() {
            return (this.tareasCompletadas / this.totalTareas) * 100;
        },
        colorBarra() {
            if (this.porcentajeCompletado <= 40) {
                return 'verde';
            } else if (this.porcentajeCompletado <= 70) {
                return 'amarillo';
            } else {
                return 'rojo';
            }
        }
    }
});
