import { Fragment, useContext } from 'react'
import Card from '../../components/Card'
import Search from '../../components/Search'
import { GithubContext } from '../../context/github/GithubContext'

const Home = () => {
  // const cards = new Array(15).fill('').map((_, i) => i)

  const { loading, users } = useContext(GithubContext)

  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Загрузка</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="col-sm-4 mb-4">
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  )
}

export default Home
