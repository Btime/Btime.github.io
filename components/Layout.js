export default function Layout({ children }) {
  return (
    <>
      <div className="header--btime">
        <h1>Central de ajuda</h1>
      </div>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: 36rem;
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h1,
        p {
          margin: 0;
        }

        code {
          font-family: "Menlo";
        }

        .header--btime {
          background-color: #9728fd;
          color: #fff;
          padding: 2.5rem;
        }

        ul {
          list-style-type: none;
        }
      `}</style>
    </>
  );
}
