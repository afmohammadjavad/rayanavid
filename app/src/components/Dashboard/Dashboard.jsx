import './Dashboard.css'

function Dashboard() {
  return (
    <article className="dashboard">
      <header>
        <span>Dashboard</span>
        <span>
          <i className="clickable fa fa-code" aria-hidden="true"></i>
          <i className="clickable fa fa-eye" aria-hidden="true"></i>
          <i className="clickable fa fa-pencil-square-o" aria-hidden="true"></i>
          <i className="clickable fa fa-floppy-o" aria-hidden="true"></i>
        </span>
      </header>
      <section>main dashboard</section>
    </article>
  );
}

export default Dashboard;