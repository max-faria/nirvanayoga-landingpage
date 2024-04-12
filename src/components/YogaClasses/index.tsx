import ClassesCard from "../ClassesCard"
import { ContainerCenter, Subtitle, TitleSecondary } from "../Header/styles"

const YogaClasses = () => {

    return (
        <ContainerCenter>
            <TitleSecondary>Yoga Classes For Every Level</TitleSecondary>
            <Subtitle>
                <p style={{ marginTop: '20px' }}>Find that which betters suits you</p>
            </Subtitle>
            <ClassesCard/>
        </ContainerCenter>
    )
}

export default YogaClasses