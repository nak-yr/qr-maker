import React from 'react';
import '../App.css';

function UserInterface () {
    return (
        <>
            <div className="UserInterface dark">
                <h1>テキストをQRコードに変換するツール</h1>
            </div>
            <div className="Description">
                <h2>How to use</h2>
                <p className="ParaDescription">
                    下の「QR化したいテキストを入力」とあるフォームに任意のテキストを入力することで、そのテキストをリアルタイムでQRコードに変換して表示します。
                </p>
            </div>
        </>
    )
}

export default UserInterface;