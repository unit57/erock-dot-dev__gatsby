/**
 * Just leaving this as an example of the set up needed to make dynamic pages
 * for the blog pages later - see master gatsby course for a refresher
 */

// import path, { resolve } from 'path';

// async function turnPizzasIntoPages({ graphql, actions }) {
//   const pizzaTemplate = resolve('./src/templates/Pizza.js');
//   const { data } = await graphql(`
//     query {
//       pizzas: allSanityPizza {
//         nodes {
//           name
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   data.pizzas.nodes.forEach((pizza) => {
//     actions.createPage({
//       path: `pizza/${pizza.slug.current}`,
//       component: pizzaTemplate,
//       context: {
//         slug: pizza.slug.current,
//       },
//     });
//   });
// }

// export async function createPages(params) {
//   await Promise.all([turnPizzasIntoPages(params)]);
// }
