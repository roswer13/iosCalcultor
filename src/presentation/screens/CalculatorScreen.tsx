import { Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {
    const {
        number,
        previousNumber,
        builNumber,
        clean,
        deleteOperation,
        togleSing,
        devideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateResult
    } = useCalculator()

    return (
        <View style={styles.caculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{number}</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}> {(previousNumber === '0') ? '' : previousNumber}</Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => clean()} label='C' blackText color={colors.lightGray} />
                <CalculatorButton onPress={() => togleSing()} label='+/-' blackText color={colors.lightGray} />
                <CalculatorButton onPress={() => deleteOperation()} label='del' blackText color={colors.lightGray} />
                <CalculatorButton onPress={() => devideOperation()} label='/' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => builNumber('7')} label='7' />
                <CalculatorButton onPress={() => builNumber('8')} label='8' />
                <CalculatorButton onPress={() => builNumber('9')} label='9' />
                <CalculatorButton onPress={() => multiplyOperation()} label='x' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => builNumber('4')} label='4' />
                <CalculatorButton onPress={() => builNumber('5')} label='5' />
                <CalculatorButton onPress={() => builNumber('6')} label='6' />
                <CalculatorButton onPress={() => substractOperation()} label='-' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => builNumber('1')} label='1' />
                <CalculatorButton onPress={() => builNumber('2')} label='2' />
                <CalculatorButton onPress={() => builNumber('3')} label='3' />
                <CalculatorButton onPress={() => addOperation()} label='+' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => builNumber('0')} label='0' doubleSize />
                <CalculatorButton onPress={() => builNumber('.')} label='.' />
                <CalculatorButton onPress={() => calculateResult()} label='=' color={colors.orange} />
            </View>
        </View>
    )
}
