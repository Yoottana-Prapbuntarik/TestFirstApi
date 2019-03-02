import React, { Component } from 'react'

export class MovieItem extends Component {
    constructor(props){
        super(props)

    }
  render() {
      let {movie} = this.props;
    return (
      <div>
        <table key={movie.id} style={{textAlign:'left'}}>
            <tbody>
                <tr>
                    <img src={movie.poster_src} alt="image movie"></img>
                    <td>
                        <h2>
                            {movie.title}
                        </h2>
                        <p>
                            {movie.overview}
                        </p>
                    </td>
                    </tr>
                </tbody>
            </table>
      </div>
    )
  }
}

export default MovieItem
