// // A custom Metadata can put into here too
// export const metadata = {
//   title: 'Traversy Media',
//   description: 'Web development tutorials and courses',
//   keywords:
//     'web development, web design, javascript, react, node, angular, vue, html, css',
// };

const AboutLayout = ({ children }) => {
  return (
    <div>
      {/*<h1>THIS IS THE ABOUT LAYOUT</h1>*/}
      {children}
    </div>
  );
};

export default AboutLayout;
