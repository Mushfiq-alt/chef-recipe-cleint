const Blog = () => {
  return (
    <div>
      <div className="border border-warning mt-4 ms-4 me-4 pt-4 ps-4 pe-4">
        <h4>
          Tell us the differences between uncontrolled and controlled components.
        </h4>
        <p>
          uncontrolled components and controlled components are two different approaches to managing form inputs and their values. In uncontrolled components, the form inputs maintain their own internal state and manage the values themselves. The component doesn't keep track of the form input values or control their behavior directly. Instead, the values are accessed using a ref, which can make it challenging to manipulate and access the values from the component. On the other hand, controlled components use the component's state to control the behavior and values of the form inputs. The values are stored in the component's state, and the component re-renders when the state changes. This allows for more control over the form input values, including validation, transformation, and synchronization with other components or the application's state. However, controlled components require more code to set up and maintain the state, event handlers, and synchronization logic. The choice between uncontrolled and controlled components depends on the complexity of the form and the desired level of control and interaction needed.
        </p>
      </div>
      <br />
      <div className="border border-warning mt-2 ms-4 me-4 pt-4 ps-4 pe-4">
        <h4>How to validate React props using PropTypes.</h4>
        <p>
          To validate React props, you can use the prop-types package, which offers a convenient way to define the expected types and shapes of your component props. After installing the package, you import PropTypes into your component file. Then, you define the prop types by adding a propTypes object to your component. For each prop, you specify its expected type using one of the available validators, such as PropTypes.string, PropTypes.number, or PropTypes.arrayOf. You can also define required props using the .isRequired modifier. For complex props, like objects or shapes, you can use PropTypes.shape to define their structure. Once the prop types are defined, the package automatically checks the passed props against their expected types, providing warnings in the console for any mismatches. By using PropTypes, you can ensure that the props used in your React components adhere to the specified types, improving code reliability and catching potential errors early on.
        </p>
      </div>
      <br />
      <div className="border border-warning mt-2 ms-4 me-4 pt-4 ps-4 pe-4">
        <h4>Tell us the difference between nodejs and express js.</h4>
        <p>
          Node.js is a runtime environment that allows running JavaScript on the server-side, while Express.js is a web application framework that simplifies the process of building web applications and APIs using Node.js. Express.js builds on top of Node.js, providing a streamlined approach for handling HTTP requests and building server-side applications.
        </p>

      </div>
      <br />
      <div className="border border-warning mt-2 ms-4 me-4 pt-4 ps-4 pe-4 mb-4">
        <h4>What is a custom hook, and why will you create a custom hook?</h4>
        <p>

          A custom hook in React is a powerful tool that allows developers to extract reusable stateful logic into a separate function. By following the naming convention of prefixing the function name with "use," custom hooks enable the reuse of complex functionality across multiple components. This approach promotes code reusability and modularity, as the custom hook encapsulates the specific logic and can be easily shared.

          Creating a custom hook offers several benefits. First, it enhances reusability, allowing developers to avoid duplicating code and promoting a more efficient development process. Second, it helps abstract and manage stateful logic, improving the readability and maintainability of components by separating concerns. Custom hooks simplify component code by handling complex tasks such as data fetching, form handling, or event listeners, reducing the amount of repetitive code within components.

          Furthermore, custom hooks facilitate testing, as they can be independently tested, making it easier to write unit tests for the shared logic. This promotes code reliability and enhances the overall testability of React applications. By leveraging custom hooks, developers can create modular and reusable pieces of functionality, leading to cleaner and more maintainable codebases.
        </p>
      </div>
    </div>
  );
};

export default Blog;
