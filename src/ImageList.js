import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {
    state = {
        keyword: '',
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const filteredImages = images.filter((ImageItem) => {
            if (!this.state.keyword) return true;

            if (ImageItem.keyword === this.state.keyword) return true;
            return false;
        })

        // const filteredImagesNodes = filteredImages.map(ImageItem =>
        //     <ImageItem
        //         ImageItem={ImageItem} />);
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

                <div>
                    {
                        filteredImages.map(image =>
                            <ImageItem
                                title={image.title}
                                picture={image.url}
                                description={image.description}
                                type={image.keyword}
                            />)
                    }
                </div>
            </div>
        )
    }
}
