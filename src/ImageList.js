import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {
    state = {
        keyword: '',
        horns: '',
    }

    // handleChange = (e) => {
    //     this.setState({
    //         keyword: e.target.value
    //     });
    // }

    // handleHornChange = (e) => {
    //     this.setState({
    //         horns: e.target.value
    //     });
    // }

    render() {
        const filteredImages = images.filter((ImageItem) => {
            if (!this.state.keyword && !this.state.horns) return true;

            if (ImageItem.keyword === this.state.keyword) return true;
            if (ImageItem.horns === Number(this.state.horns)) return true;
            return false;
        })

        console.log(filteredImages)

        return (
            <div>
                <select value={this.state.keyword} onChange={(e) => {
                    this.setState({
                        keyword: e.target.value
                    })
                }}>
                    <option value=''>Show All</option>
                    <option value='narwhal'>narwhal</option>
                    <option value='rhino'>rhino</option>
                    <option value='unicorn'>unicorn</option>
                    <option value='unilego'>unilego</option>
                    <option value='triceratops'>triceratops</option>
                    <option value='markhor'>markhor</option>
                    <option value='mouflon'>mouflon</option>
                    <option value='addax'>addax</option>
                    <option value='chameleon'>chameleon</option>
                    <option value='lizard'>lizard</option>
                    <option value='dragon'>dragon</option>
                </select>

                <select value={this.state.horns} onChange={(e) => {
                    this.setState({
                        horns: e.target.value
                    })
                }}>
                    <option value=''>All Horns</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>

                <div>
                    {
                        filteredImages.map(image =>
                            <ImageItem
                                title={image.title}
                                picture={image.url}
                                description={image.description}
                            // type={image.keyword}
                            />)
                    }
                </div>
            </div>
        )
    }
}
