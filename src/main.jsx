import React from "react"
import "./main.css"
import { Link } from "react-router-dom"
function Main() {
  return (
    <div className="base">
      <header className="main_header">
        <a href="/">main</a>
        <a href="/assignment">assignment</a>
      </header>
      <main className="main_a">
        <section>
          <article>
            <fieldset>
              <legend>
                <h1>study - assignment</h1>
              </legend>
              <Link class="" to="/assignment">
                시작하기
              </Link>
            </fieldset>
          </article>
        </section>
      </main>
      <footer className="footer_b">footer</footer>
    </div>
  )
}

export default Main
