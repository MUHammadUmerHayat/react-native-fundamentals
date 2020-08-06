export default [
  {
    lesson: "hello-world",
    title: "Hello, world!",
    source: require("./exercises/hello-world.js").default,
    // source: require("./solutions/hello-world.final").default,
    hintSource: require("./exercises/hello-world.md"),
  },
  {
    lesson: "capturing-taps",
    title: "Capturing Taps",
    source: require("./exercises/capturing-taps.js").default,
    // source: require("./solutions/capturing-taps.final").default,
    // source: require("./solutions/capturing-taps.extra-1").default,
    hintSource: require("./exercises/capturing-taps.md"),
  },
  {
    lesson: "custom-component",
    title: "Custom Component",
    source: require("./exercises/custom-component").default,
    // source: require("./solutions/custom-component.final").default,
    // source: require("./solutions/custom-component.extra-1").default,
    hintSource: require("./exercises/custom-component.md"),
  },
  {
    lesson: "state-props",
    title: "State & Props",
    // source: require("./solutions/state-props.final").default,
    source: require("./solutions/state-props.extra-1").default,
    // hintSource: require("./exercises/state-props.md"),
  },
  {
    lesson: "styling",
    title: "Styling",
    // source: require("./solutions/styling.final").default,
    source: require("./solutions/styling.extra-1").default,
    // hintSource: require("./exercises/styling.md"),
  },
  {
    lesson: "scrollable-content",
    title: "Scrollable Content",
    source: require("./solutions/scrollable-content.final").default,
    // hintSource: require("./exercises/scrollable-content.md"),
  },
  {
    lesson: "building-a-form",
    title: "Building a Form",
    source: require("./solutions/building-a-form.final").default,
  },
  {
    lesson: "long-lists",
    title: "Long Lists",
    // source: require("./solutions/long-lists.final").default,
    source: require("./solutions/long-lists.extra-1").default,
  },
  {
    lesson: "working-with-api",
    title: "Working with an API",
    // source: require("./solutions/working-with-api.final").default,
    // source: require("./solutions/working-with-api.extra-1").default,
    source: require("./solutions/working-with-api.extra-2").default,
  },
  {
    lesson: "multiple-files",
    title: "Mulitple Files",
    source: require("./solutions/multiple-files.final").default,
  },
  {
    lesson: "class-components",
    title: "Class Components",
    source: require("./solutions/class-components.final").default,
  },
  {
    lesson: "component-lifecycle",
    title: "Component Lifecycle",
    // source: require("./solutions/component-lifecycle.final").default,
    source: require("./solutions/component-lifecycle.extra-1").default,
  },
];
