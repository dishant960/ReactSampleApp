import React from 'react';
import Content from './content.js'

class Home extends React.Component {

    render() {
        return <div>
            <div className="pageHeader">
                <h2>Amazing Places In The World</h2>
                <hr />
            </div>
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--11-col  mdl-cell--7-col-tablet mdl-cell--12-col-phone">
                    <div className="mdl-grid">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;