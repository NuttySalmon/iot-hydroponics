import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import DevCard from './DevCard'
import style from './home.module.scss'

const Home = () => {
  const cards = []
  const match = useRouteMatch()
  for (let i = 0; i < 5; i += 1) {
    cards.push(
      <Link to={`${match.url}/plant/${i}`}>
        <DevCard
          key={i}
          className={style.devCard}
          name={i.toString()}
          temp={123}
          hum={340}
        />
      </Link>
    )
  }
  console.log(match)
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-5"> Good Morning, Mark!</h2>
        </Col>
        <Col style={{ maxWidth: 'fit-content' }}>
          <Link to="/dashboard/add">
            <Button variant="long-sm"> Add device</Button>
          </Link>
        </Col>
      </Row>
      <div className={style.devCardParent}>{cards}</div>
    </Container>
  )
}

export default Home
