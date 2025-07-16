// Módulos y colores
const modulos = {
  basico: { nombre: "Básico", colorClase: "basico" },
  edificacion: { nombre: "Edificación", colorClase: "edificacion" },
  instalaciones: { nombre: "Instalaciones", colorClase: "instalaciones" },
  vial: { nombre: "Vial", colorClase: "vial" },
  administracion: { nombre: "Administración", colorClase: "administracion" },
  evaluacion: { nombre: "Evaluación de Proyectos", colorClase: "evaluacion" },
  estructuras: { nombre: "Estructuras", colorClase: "estructuras" },
  "instalaciones-aplicadas": { nombre: "Instalaciones Aplicadas", colorClase: "instalaciones-aplicadas" },
  "obras-civiles": { nombre: "Obras Civiles", colorClase: "obras-civiles" },
  supervision: { nombre: "Supervisión y Asesoramiento", colorClase: "supervision" },
  construccion: { nombre: "Construcción", colorClase: "construccion" },
  transversal: { nombre: "Formación Transversal", colorClase: "transversal" },
};

// Ramos con módulos y prerequisitos
const ramosPorSemestre = {
  1: [
    { nombre: "Matemática", modulo: "basico" },
    { nombre: "Geometría y Trigonometría", modulo: "basico" },
    { nombre: "Física I", modulo: "basico" },
    { nombre: "Taller Integrado ABP", modulo: "transversal" },
    { nombre: "Materiales de Construcción", modulo: "edificacion" },
    { nombre: "Construcción I", modulo: "edificacion" },
    { nombre: "Comunicación y Aprendizaje", modulo: "transversal" },
    { nombre: "Herramientas de Ofimática", modulo: "transversal" },
  ],
  2: [
    { nombre: "Topografía", modulo: "vial" },
    { nombre: "Dibujo Constructivo", modulo: "vial" },
    { nombre: "Instalaciones Sanitarias", modulo: "instalaciones" },
    { nombre: "Interpretación de Planos", modulo: "transversal" },
    { nombre: "Construcción II", modulo: "edificacion", prerequisitos: ["Materiales de Construcción", "Construcción I"] },
    { nombre: "Inglés I", modulo: "transversal" },
    { nombre: "Innovación y Transferencia Tecnológica", modulo: "transversal" },
  ],
  3: [
    { nombre: "Suelos y Caminos", modulo: "vial", prerequisitos: ["Topografía", "Dibujo Constructivo"] },
    { nombre: "Instalaciones de Gas y Calefacción", modulo: "instalaciones", prerequisitos: ["Instalaciones Sanitarias"] },
    { nombre: "Cubicación y Presupuesto", modulo: "administracion" },
    { nombre: "Construcción en Hormigón", modulo: "edificacion", prerequisitos: ["Construcción II"] },
    { nombre: "Construcción en Madera y Acero", modulo: "edificacion", prerequisitos: ["Construcción II"] },
    { nombre: "Inglés II", modulo: "transversal", prerequisitos: ["Inglés I"] },
    { nombre: "Desarrollo Profesional", modulo: "transversal" },
  ],
  4: [
    { nombre: "Prev. de Riesgos", modulo: "transversal" },
    { nombre: "Instalaciones Eléctricas y Fotovoltaicas", modulo: "instalaciones", prerequisitos: ["Instalaciones de Gas y Calefacción"] },
    { nombre: "Administración y Supervisión de Obras", modulo: "administracion", prerequisitos: ["Cubicación y Presupuesto"] },
    { nombre: "Programación de Obras", modulo: "administracion", prerequisitos: ["Cubicación y Presupuesto"] },
    { nombre: "Práctica Integrada I", modulo: "transversal" },
    { nombre: "Cultura y Sociedad", modulo: "transversal" },
    { nombre: "Sustentabilidad y Emprendimiento", modulo: "transversal" },
  ],
  5: [
    { nombre: "Cálculo Diferencial", modulo: "basico", prerequisitos: ["Matemática", "Geometría y Trigonometría", "Física I"] },
    { nombre: "Física II", modulo: "estructuras", prerequisitos: ["Física I"] },
    { nombre: "Dibujo Aplicado", modulo: "transversal" },
    { nombre: "Construcción III", modulo: "construccion" },
    { nombre: "Energías Renovables No Convencionales", modulo: "instalaciones-aplicadas" },
    { nombre: "Mecánica de Suelos", modulo: "obras-civiles", prerequisitos: ["Suelos y Caminos"] },
    { nombre: "Inglés III", modulo: "transversal", prerequisitos: ["Inglés II"] },
  ],
  6: [
    { nombre: "Cálculo Integral", modulo: "basico", prerequisitos: ["Cálculo Diferencial"] },
    { nombre: "Estadística y Probabilidad", modulo: "basico", prerequisitos: ["Cálculo Diferencial"] },
    { nombre: "Estructuras I", modulo: "estructuras", prerequisitos: ["Física II"] },
    { nombre: "Construcción Biosustentable", modulo: "construccion", prerequisitos: ["Construcción III"] },
    { nombre: "Proyecto de Instalaciones", modulo: "instalaciones-aplicadas", prerequisitos: ["Energías Renovables No Convencionales"] },
    { nombre: "Topografía Aplicada", modulo: "obras-civiles", prerequisitos: ["Mecánica de Suelos"] },
    { nombre: "Práctica Integrada II", modulo: "transversal" },
    { nombre: "Inglés IV", modulo: "transversal", prerequisitos: ["Inglés III"] },
  ],
  7: [
    { nombre: "Administración y Legislación de la Construcción", modulo: "evaluacion" },
    { nombre: "Gestión Medioambiental", modulo: "evaluacion" },
    { nombre: "Estructuras II", modulo: "estructuras", prerequisitos: ["Estructuras I"] },
    { nombre: "Cubicación y Presupuesto Aplicado", modulo: "supervision" },
    { nombre: "Construcción en Obras Civiles I", modulo: "obras-civiles", prerequisitos: ["Topografía Aplicada"] },
    { nombre: "Construcción en Obras Hidráulicas", modulo: "obras-civiles", prerequisitos: ["Topografía Aplicada"] },
    { nombre: "Habilidades Comunicativas", modulo: "transversal" },
  ],
  8: [
    { nombre: "Contabilidad General y Costos", modulo: "evaluacion", prerequisitos: ["Administración y Legislación de la Construcción", "Gestión Medioambiental"] },
    { nombre: "Formulación y Evaluación de Proyectos", modulo: "evaluacion", prerequisitos: ["Administración y Legislación de la Construcción", "Gestión Medioambiental"] },
    { nombre: "Estructuras Sismo Resistentes", modulo: "estructuras", prerequisitos: ["Estructuras II"] },
    { nombre: "Construcción Industrial", modulo: "estructuras", prerequisitos: ["Estructuras II"] },
    { nombre: "Control y Gestión de la Calidad", modulo: "supervision", prerequisitos: ["Cubicación y Presupuesto Aplicado"] },
    { nombre: "Construcción de Obras Civiles II", modulo: "obras-civiles", prerequisitos: ["Construcción en Obras Civiles I", "Construcción en Obras Hidráulicas"] },
  ],
  9: [
    { nombre: "Taller de Gestión Inmobiliaria", modulo: "evaluacion", prerequisitos: ["Contabilidad General y Costos", "Formulación y Evaluación de Proyectos"] },
    { nombre: "Taller de Proyectos de Construcción", modulo: "transversal" },
    { nombre: "Proyecto Integrado Final", modulo: "transversal" },
    { nombre: "Dirección Técnica de Obras", modulo: "supervision", prerequisitos: ["Control y Gestión de la Calidad"] },
    { nombre: "Planificación y Control de Obras", modulo: "supervision", prerequisitos: ["Control y Gestión de la Calidad"] },
    { nombre: "Práctica Integrada de Competencias", modulo: "transversal" },
  ],
};

// Estado global para saber qué ramos están aprobados
const estadoRamos = new Set();

// Verifica si un ramo está desbloqueado (todos sus prerequisitos aprobados)
function estaDesbloqueado(ramo) {
  if (!ramo.prerequisitos) return true;
  return ramo.prerequisitos.every(pre => estadoRamos.has(pre));
}

// Renderiza la malla curricular
function renderizarMalla() {
  const mallaDiv = document.getElementById("malla");
  mallaDiv.innerHTML = "";

  let totalRamos = 0;
  let aprobados = 0;

  for (const semestre of Object.keys(ramosPorSemestre).sort((a,b)=>a-b)) {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = semestre + "° Semestre";
    semDiv.appendChild(titulo);

    ramosPorSemestre[semestre].forEach(ramo => {
      totalRamos++;
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo " + (modulos[ramo.modulo]?.colorClase || "");

      if (estadoRamos.has(ramo.nombre)) {
        ramoDiv.classList.add("aprobado");
        aprobados++;
      }

      if (!estaDesbloqueado(ramo)) {
        ramoDiv.classList.add("bloqueado");
      }

      ramoDiv.textContent = ramo.nombre;
      ramoDiv.title = ramo.prerequisitos ? "Se desbloquea con: " + ramo.prerequisitos.join(", ") : "Sin prerequisitos";

      ramoDiv.onclick = () => {
        if (!ramoDiv.classList.contains("bloqueado")) {
          if (estadoRamos.has(ramo.nombre)) {
            estadoRamos.delete(ramo.nombre);
          } else {
            estadoRamos.add(ramo.nombre);
          }
          renderizarMalla();
        }
      };

      semDiv.appendChild(ramoDiv);
    });

    mallaDiv.appendChild(semDiv);
  }

  actualizarPorcentaje(totalRamos, aprobados);
}

// Actualiza el porcentaje de ramos aprobados
function actualizarPorcentaje(total, aprobados) {
  const porcentajeDiv = document.getElementById("porcentaje-aprobados");
  const porcentaje = total === 0 ? 0 : Math.round((aprobados / total) * 100);
  porcentajeDiv.textContent = `Ramos aprobados: ${porcentaje}%`;
}

// Renderiza la leyenda de módulos con sus colores
function renderizarLeyenda() {
  const leyendaDiv = document.getElementById("leyenda-modulos");
  leyendaDiv.innerHTML = "";
  for (const key in modulos) {
    const item = document.createElement("div");
    item.className = "modulo-leyenda";

    const colorCuadro = document.createElement("div");
    colorCuadro.className = "color-cuadro " + modulos[key].colorClase;

    const texto = document.createElement("span");
    texto.textContent = modulos[key].nombre;

    item.appendChild(colorCuadro);
    item.appendChild(texto);

    leyendaDiv.appendChild(item);
  }
}

// Inicialización
renderizarLeyenda();
renderizarMalla();
