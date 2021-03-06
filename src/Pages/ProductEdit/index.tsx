import Button from '../../components/Button/index';

import Header from '../../components/Header/index';

export default function Home() {
    return (
        <>
            <Header/>
            <Button
                text={'Hello World'}
                width={100}
                height={30}
                color="rgba(50, 50, 50, 0.9)"
                background={'rgba(200, 200, 200, 0.9)'}
                hoverBackground={'rgba(100, 230, 230, 0.7)'}
            />
        </>

    )


}
