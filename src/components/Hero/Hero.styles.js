import colors from "../../theme/colors"

const styles = {
    container: {
        backgroundColor: colors.light,
        height: 705,
        width: '100%'
    },
    leftPanel: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '20%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    smallBoldText: {
        fontSize: 20,
        fontWeight: 700,
    },
    bigBoldText: {
        fontSize: 48,
        fontWeight: 900,
        lineHeight: 1.2
    },
    button: {
        width: '50%',
        borderRadius: 9,
        backgroundColor: colors.yellow,
        color: colors.black,
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        boxShadow: 'none',
        borderColor: 'transparent',
        cursor: 'pointer',
        marginTop: 20
    }
}

export default styles;