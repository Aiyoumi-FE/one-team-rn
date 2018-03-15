import React from 'react';
import { observable, action } from 'mobx';

export class UserMsg {
    @observable userName = '小明';
    @observable emiil = '************';
    @observable avatar = 'http://img.taopic.com/uploads/allimg/140320/235013-14032020515270.jpg';
    @action changeUserName = (name) => {
        this.userName = name
    };
}