import React from 'react';
import { observable, action } from 'mobx';

export class Store {
    @observable userName = '小明';
    @observable email = '88888@163.com';
    @observable avatar = 'http://img.taopic.com/uploads/allimg/140320/235013-14032020515270.jpg';
    @action changeUserName = (name) => {
        this.userName = name
    };
    @action changeEmail = (name) => {
        this.email = name
    };
}

export default new Store()