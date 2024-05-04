import {Box, Typography} from '@mui/material'
import HomeOptions from '../../components/organisms/HomeOptions/HomeOptions'
import OptionButton from '../../components/molecules/OptionButton/OptionButton'
import mockData from '../../mock/mock-data.json'

const Home = () => {
    return (
        <Box className="PageContainer">
            <Typography>
                Choose a topic
            </Typography>
            <Box>
                {mockData.map((topic) => <OptionButton title={topic.title} description={topic.description}/>)}
            </Box>
        </Box>
    )
}

export default Home
