import styled from "styled-components";

const Tabs = styled.div`

    .Title {
        position: absolute;
        width: 67px;
        height: 27px;
        left: 24px;
        top: 92px;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 27px;
        align-items: center;
        letter-spacing: 1px;
        color: #151A17;
    }

    .Tab1 {
        position: absolute;
        width: 327px;
        height: 78px;
        left: 24px;
        top: 154px;
        background: #D5E6D5;
        border: 0.5px solid #151A17;
        border-radius: 10px;
    }

    .snap-box > img {
        position: absolute;
        width: 90px;
        height: 90px;
        left: 39px;
        top: 129px;
        background: #FFFFFF;
        border: 0.5px solid #151A17;
        border-radius: 10px;
    }

    .name-box {
        position: absolute;
        height: 27px;
        left: 129px;
        top: 12px;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
    }

    .number-box {
        position: absolute;
        width: 109px;
        height: 22px;
        left: 133px;
        top: 44px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        align-items: center;
        letter-spacing: 1px;
    }

    .Tab2 {
        position: absolute;
        width: 327px;
        height: 92px;
        left: 24px;
        top: 256px;
        background: #D5E6D5;
        border: 0.5px solid #151A17;
        border-radius: 10px;

        img {
            position: absolute;
            left: 8.33%;
            top: 25.33%;
        }

        p {
            position: absolute;
            width: 67px;
            height: 27px;
            left: 130px;
            top: 33px;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 27px;
            align-items: center;
            letter-spacing: 1px;
        }
    }

    .Tab3 {
        position: absolute;
        width: 327px;
        height: 92px;
        left: 24px;
        top: 372px;
        background: #D5E6D5;
        border: 0.5px solid #151A17;
        border-radius: 10px;

        img {
            position: absolute;
            left: 8.33%;
            top: 30.67%;
        }

        p {
            position: absolute;
            width: 85px;
            height: 27px;
            left: 121px;
            top: 33px;

            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 27px;
            align-items: center;
            letter-spacing: 1px;
        }
    }

    .Tab4 {
        position: absolute;
        width: 327px;
        height: 92px;
        left: 24px;
        top: 488px;
        background: #D5E6D5;
        border: 0.5px solid #151A17;
        border-radius: 10px;

        img {
            position: absolute;
            left: 8.33%;
            top: 24.33%;
        }

        p {
            position: absolute;
            width: 86px;
            height: 81px;
            left: 121px;
            top: 6px;

            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 27px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 1px;
        }
    }

    .Tab5 {
        position: absolute;
        width: 327px;
        height: 92px;
        left: 24px;
        top: 604px;
        background: #D5E6D5;
        border: 0.5px solid #151A17;
        border-radius: 10px;

        p {
            position: absolute;
            width: 210px;
            height: 27px;
            left: 7px;
            top: 32px;

            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 27px;
            align-items: center;
            text-align: center;
            letter-spacing: 1px;
        }
    }

    .profile-icon{
        position: absolute;
        left: 8.33%;
        right: 8.33%;
        top: 8.33%;
        bottom: 8.33%;
        border: 3px solid #151A17;
    }

`;

export const Account = () => {
    return (
        <>
            <Tabs>
                <p className="Title">Profile</p>

                <div className="Tab1">
                    <div className="name-box">Rishabh Anand</div>
                    <div className="number-box">0123456789</div>
                </div>
                <div className="snap-box">
                    <img src="assets/Rishu.jpg" alt="profile-pic" />
                </div>

                <div className="Tab2">
                    <img src="assets/Profile.svg"alt="profileIcon" />
                    <p>Profile</p>
                </div>

                <div className="Tab3">
                    <img src="assets/Address.svg" alt="addressIcon" />
                    <p>Address</p>
                </div>

                <div className="Tab4">
                    <img src="assets/OrderReturn.svg" alt="addressIcon" />
                    <p>Orders & Returns</p>
                </div>

                <div className="Tab5">
                    <p>Location Permission</p>
                </div>
                
            </Tabs>
        </>
    );
}