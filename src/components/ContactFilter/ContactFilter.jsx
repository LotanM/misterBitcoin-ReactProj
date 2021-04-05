import { Component } from 'react'


export class ContactFilter extends Component {
    state = {
        term: '',
    }
    handleChange = ({ target }) => {
        this.setState({ term: target.value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    render() {
        const { term } = this.state
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="term"></label>
                <input placeholder="Search" type="text" id="term" name="term" value={term} onChange={this.handleChange} />
            </form>
        )
    }
}
