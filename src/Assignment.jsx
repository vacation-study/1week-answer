import React, { useState } from "react"
import "./main.css"

function Assignment() {
  const saveData = e => {
    e.preventDefault()
    setArr(stateA => [...stateA, { ...state, date: 2023 - 12 - 21 }])
  }
  const [state, setState] = useState({
    state1: "",
    state2: "",
    state3: "",
    state4: ""
  })
  const [arr, setArr] = useState([])
  let [modal, setModal] = useState(false)
  return (
    <div className="base">
      <header className="main_header">
        <a href="/">main</a>
        <a href="/assignment">assignment</a>
      </header>
      <main className="main_a">
        <section>
          <article>
            <section className="modalbutton">
              <button onClick={() => setModal(state => !state)}>on</button>
              <button onClick={() => setModal(state => !state)}>off</button>
              {modal ? (
                <form onSubmit={saveData}>
                  {["state1", "state2", "state3", "state4"].map(item => (
                    <input
                      key={item}
                      type="text"
                      minLength="2"
                      onChange={e => {
                        setState(state => ({ ...state, [item]: e.target.value }))
                      }}
                    ></input>
                  ))}
                  <input type="submit" value="submit"></input>
                </form>
              ) : null}
            </section>
            <section className="mapprint">
              {arr.map(item => (
                <div key={item.state1}>
                  {["state1", "state2", "state3", "state4"].map(itemA => (
                    <div key={itemA + Math.ra}>{item[itemA]}</div>
                  ))}
                </div>
              ))}
            </section>
          </article>
        </section>
      </main>
      <footer className="footer_b">footer</footer>
    </div>
  )
}

export default Assignment
