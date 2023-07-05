/* empty css                */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, m as maybeRenderHead } from './chunk.da30a178.js';
import 'html-escaper';
import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                */
function Navbar() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("nav", {
    className: "bg-white border-gray-200 fixed w-full ",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
      children: [/* @__PURE__ */ jsx("a", {
        href: "#",
        className: "flex items-center",
        children: /* @__PURE__ */ jsx("img", {
          src: "/assets/logo.jpg",
          className: "h-16 mr-3",
          alt: "Flowbite Logo"
        })
      }), /* @__PURE__ */ jsxs("button", {
        onClick: () => setOpen((init) => !init),
        "data-collapse-toggle": "navbar-multi-level",
        type: "button",
        className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ",
        "aria-controls": "navbar-multi-level",
        "aria-expanded": "false",
        children: [/* @__PURE__ */ jsx("span", {
          className: "sr-only",
          children: "Open main menu"
        }), /* @__PURE__ */ jsx("svg", {
          className: "w-5 h-5",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 17 14",
          children: /* @__PURE__ */ jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M1 1h15M1 7h15M1 13h15"
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: ` ${!open ? "hidden" : ""} w-full md:block md:w-auto`,
        id: "navbar-multi-level",
        children: /* @__PURE__ */ jsxs("ul", {
          className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-white  ",
          children: [/* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  md:p-0 ",
              "aria-current": "page",
              children: "Home"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",
              children: "Products"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",
              children: "Clients"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",
              children: "About Us"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",
              children: "Blog"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",
              children: "Contact Us"
            })
          })]
        })
      })]
    })
  });
}
__astro_tag_component__(Navbar, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="antialiased ">
		${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/vivek/Documents/nasty-nadir/src/components/Navbar", "client:component-export": "default" })}
	<main class="py-[100px]">
		${renderSlot($$result, $$slots["default"])}
	</main>

	</body></html>`;
}, "/Users/vivek/Documents/nasty-nadir/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<p class="h-[2000px] astro-J7PV25F6">We are using astro because we are creating a highly static page , and we are shipping 0 javascript bundle to browser. No js in browser</p>
` })}`;
}, "/Users/vivek/Documents/nasty-nadir/src/pages/index.astro");

const $$file = "/Users/vivek/Documents/nasty-nadir/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
