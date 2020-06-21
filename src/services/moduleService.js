class ModuleService {
    createModule = (courseId, module) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/courses/${courseId}/modules`, {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findModulesForCourse = (courseId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/courses/${courseId}/modules`)
            .then(response => response.json())
    }

    findModule = (moduleId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/modules/${moduleId}`)
            .then(response => response.json())
    }

    updateModule = (moduleId, module) => {
        console.log(module);
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/modules/${moduleId}`, {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteModule = (moduleId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/modules/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default ModuleService