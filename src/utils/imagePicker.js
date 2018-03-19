/*
 * 图片选择器(待完善)
 * imagePickerOne(method, url, data, callback)  // 单张图片选择
 */
import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';

class ImagePickerUtil extends React.Component {
    // 单张图片选择
    static imagePickerOne(callback, opts = {}) {
        opts = Object.assign({
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照获取',
            chooseFromLibraryButtonTitle: '库中获取',
            quality: 1.0,
            maxWidth: 300,
            maxHeight: 300,
            storageOptions: {
                skipBackup: true
            }
        }, opts);

        ImagePicker.showImagePicker(opts, (res) => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled photo picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
            } else {
                callback(res);
            }
        });
    }
}

module.exports = ImagePickerUtil;