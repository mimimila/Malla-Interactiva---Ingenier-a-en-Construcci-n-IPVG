const ramos = [
  { nombre: "Matemática", semestre: 1, modulo: "basico" },
  { nombre: "Geometría y Trigonometría", semestre: 1, modulo: "basico" },
  { nombre: "Física I", semestre: 1, modulo: "basico" },
  { nombre: "Taller Integrado ABP", semestre: 1 },
  { nombre: "Materiales de Construcción", semestre: 1, modulo: "edificacion" },
  { nombre: "Construcción I", semestre: 1, modulo: "edificacion" },
  { nombre: "Comunicación y Aprendizaje", semestre: 1, modulo: "transversal" },
  { nombre: "Herramientas de Ofimática", semestre: 1, modulo: "transversal" },

  { nombre: "Topografía", semestre: 2, modulo: "vial" },
  { nombre: "Dibujo Constructivo", semestre: 2, modulo: "vial" },
  { nombre: "Instalaciones Sanitarias", semestre: 2, modulo: "instalaciones" },
  { nombre: "Interpretación de Planos", semestre: 2 },
  { nombre: "Construcción II", semestre: 2, modulo: "edificacion", requisitos: ["Materiales de Construcción", "Construcción I"] },
  { nombre: "Inglés I", semestre: 2, modulo: "transversal" },
  { nombre: "Innovación y Transferencia Tecnológica", semestre: 2, modulo: "transversal" },

  { nombre: "Suelos y Caminos", semestre: 3, modulo: "vial", requisitos: ["Topografía", "Dibujo Constructivo"] },
  { nombre: "Instalaciones de Gas u Calefacción", semestre: 3, modulo: "instalaciones", requisitos: ["Instalaciones Sanitarias"] },
  { nombre: "Cubicación y Presupuesto", semestre: 3, modulo: "administracion" },
  { nombre: "Construcción en Hormigón", semestre: 3, modulo: "edificacion", requisitos: ["Construcción II"] },
  { nombre: "Construcción en Madera y Acero", semestre: 3, modulo: "edificacion", requisitos: ["Construcción II"] },
  { nombre: "Inglés II", semestre: 3, modulo: "transversal", requisitos: ["Inglés I"] },
  { nombre: "Desarrollo Profesional", semestre: 3, modulo: "transversal" },

  { nombre: "Prev. de Riesgos", semestre: 4 },
  { nombre: "Instalaciones Eléctricas y Fotovoltaicas", semestre: 4, modulo: "instalaciones", requisitos: ["Instalaciones de Gas u Calefacción"] },
  { nombre: "Administración y Supervisión de Obras", semestre: 4, modulo: "administracion", requisitos: ["Cubicación y Presupuesto"] },
  { nombre: "Programación de Obras", semestre: 4, modulo: "administracion", requisitos: ["Cubicación y Presupuesto"] },
  { nombre: "Práctica Integrada I", semestre: 4 },
  { nombre: "Cultura y Sociedad", semestre: 4, modulo: "transversal" },
  { nombre: "Sustentabilidad y Emprendimiento", semestre: 4, modulo: "transversal" },

  { nombre: "Cálculo Diferencial", semestre: 5, modulo: "basico", requisitos: ["Matemática", "Geometría y Trigonometría", "Física I"] },
  { nombre: "Física II", semestre: 5, modulo: "estructuras", requisitos: ["Física I"] },
  { nombre: "Dibujo Aplicado", semestre: 5 },
  { nombre: "Construcción III", semestre: 5, modulo: "construccion" },
  { nombre: "Energías Renovables No Convencionales", semestre: 5, modulo: "instalaciones-aplicadas" },
  { nombre: "Mecánica de Suelos", semestre: 5, modulo: "obras-civiles", requisitos: ["Suelos y Caminos"] },
  { nombre: "Inglés III", semestre: 5, modulo: "transversal", requisitos: ["Inglés II"] },

  { nombre: "Cálculo Integral", semestre: 6, modulo: "basico", requisitos: ["Cálculo Diferencial"] },
  { nombre: "Estadística y Probabilidad", semestre: 6, modulo: "basico", requisitos: ["Cálculo Diferencial"] },
  { nombre: "Estructuras I", semestre: 6, modulo: "estructuras", requisitos: ["Física II"] },
  { nombre: "Construcción Biosustentable", semestre: 6, modulo: "construccion", requisitos: ["Construcción III"] },
  { nombre: "Proyecto de Instalaciones", semestre: 6, modulo: "instalaciones-aplicadas", requisitos: ["Energías Renovables No Convencionales"] },
  { nombre: "Topografía Aplicada", semestre: 6, modulo: "obras-civiles", requisitos: ["Mecánica de Suelos"] },
  { nombre: "Práctica Integrada II", semestre: 6 },
  { nombre: "Inglés IV", semestre: 6, modulo: "transversal", requisitos: ["Inglés III"] },

  { nombre: "Administración y Legislación de la Construcción", semestre: 7, modulo: "evaluacion" },
  { nombre: "Gestión Medioambiental", semestre: 7, modulo: "evaluacion" },
  { nombre: "Estructuras II", semestre: 7, modulo: "estructuras", requisitos: ["Estructuras I"] },
  { nombre: "Cubicación y Presupuesto Aplicado", semestre: 7, modulo: "supervision" },
  { nombre: "Construcción en Obras Civiles I", semestre: 7, modulo: "obras-civiles", requisitos: ["Topografía Aplicada"] },
  { nombre: "Construcción en Obras Hidráulicas", semestre: 7, modulo: "obras-civiles", requisitos: ["Topografía Aplicada"] },
  { nombre: "Habilidades Comunicativas", semestre: 7, modulo: "transversal" },

  { nombre: "Contabilidad General y Costos", semestre: 8, modulo: "evaluacion", requisitos: ["Administración y Legislación de la Construcción", "Gestión Medioambiental"] },
  { nombre: "Formulación y Evaluación de Proyectos", semestre: 8, modulo: "evaluacion", requisitos: ["Administración y Legislación de la Construcción", "Gestión Medioambiental"] },
  { nombre: "Estructuras Sismo Resistentes", semestre: 8, modulo: "estructuras", requisitos: ["Estructuras II"] },
  { nombre: "Construcción Industrial", semestre: 8, modulo: "estructuras", requisitos: ["Estructuras II"] },
  { nombre: "Control y Gestión de la Calidad", semestre: 8, modulo: "supervision", requisitos: ["Cubicación y Presupuesto Aplicado"] },
  { nombre: "Construcción de Obras Civiles II", semestre: 8, modulo: "obras-civiles", requisitos: ["Construcción en Obras Civiles I", "Construcción en Obras Hidráulicas"] },

  { nombre: "Taller de Gestión Inmobiliaria", semestre: 9, modulo: "evaluacion", requisitos: ["Contabilidad General y Costos", "Formulación y Evaluación de Proyectos"] },
  { nombre: "Taller de Proyectos de Construcción", semestre: 9 },
  { nombre: "Proyecto Integrado Final", semestre: 9 },
  { nombre: "Dirección Técnica de Obras", semestre: 9, modulo: "supervision", requisitos: ["Control y Gestión de la Calidad"] },
  { nombre: "Planificación y Control de Obras", semestre: 9, modulo: "supervision", requisitos: ["Control y Gestión de la Calidad"] },
  { nombre: "Práctica Integrada de Competencias", semestre: 9 }
];

const estado = {};

function estaDesbloqueado(ramo) {
  if (!ramo.requisitos) return true;
  return ramo.requisitos.every(r => estado[r]);
}

function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let s = 1; s <= 9; s++) {
    const col = document.createElement("div");
    col.classList.add("semestre");
    const titulo = document.createElement("h2");
    titulo.textContent = `${s}° Semestre`;
    col.appendChild(titulo);

    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.classList.add("ramo");
      if (ramo.modulo) div.classList.add(ramo.modulo);
      if (!estaDesbloqueado(ramo)) div.classList.add("bloqueado");
      if (estado[ramo.nombre]) div.classList.add("aprobado");
      div.textContent = ramo.nombre;

      div.addEventListener("click", () => {
        if (estaDesbloqueado(ramo)) {
          estado[ramo.nombre] = !estado[ramo.nombre];
          render();
        }
      });

      col.appendChild(div);
    });

    contenedor.appendChild(col);
  }
}

render();
