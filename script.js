gsap.registerPlugin(ScrollTrigger);

// Animation des sections au défilement
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Animation de la barre de compétences
document.querySelectorAll(".skill-progress").forEach(skill => {
    let width = skill.getAttribute("data-width");
    gsap.to(skill, { width: width + "%", duration: 2 });
});

// Création du diagramme réseau
const nodes = new vis.DataSet([
    { id: 1, label: "Serveur" },
    { id: 2, label: "Poste de travail" },
    { id: 3, label: "Routeur" },
    { id: 4, label: "Switch" }
]);
const edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 }
]);
const container = document.getElementById("network-diagram");
const data = { nodes: nodes, edges: edges };
const options = { height: '100%' };
new vis.Network(container, data, options);
