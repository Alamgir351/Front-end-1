import React from 'react';


const ProjectInfo =() => {
        return (
            <div className="Project-Item-Container">
                <li className="Project-Name">
                    {this.props.projectName}
                </li>
                <p className="Project-DueDate">
                    Project Due Date: {this.props.projectDeadline}
                </p>

            </div>
        )
}

export default ProjectInfo