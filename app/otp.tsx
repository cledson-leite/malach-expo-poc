import { ActivityIndicator, KeyboardAvoidingView, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { defaultStyles } from '@/constants/Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MaskInput from 'react-native-mask-input'

const Page = () => {
    const [loading, setLoading] = useState(true)
    const [mobile, setMobile] = useState('')
    const router = useRouter()
    const keyboardVerticalOffset = 90
    const {bottom} = useSafeAreaInsets()

    const mask = [
        '+','5', '5', ' ', '(',/\d/,/\d/,')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,
    ]

    const openLink = () => {
        Linking.openURL('https://github.com/cledson-leite')
    }

    const sendOTP = async () => {}

    const trySignIn = async () => {}

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={[styles.container, {marginBottom: bottom}]}>
                {
                    loading && <View style={[StyleSheet.absoluteFill,styles.loading]}>
                        <ActivityIndicator size='large' color={Colors.primary} />
                        <Text style={{fontSize: 18, padding: 20, fontWeight: '500'}}>Sending code ...</Text>
                    </View>
                }
                <Text style={styles.description}>
                    Malach will need to verify your account. Carrier changes may apply.
                </Text>
                <View style={styles.list} >
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>Brazil</Text>
                        <Ionicons name='chevron-forward' size={20} color={Colors.gray} />
                    </View>
                    <View style={defaultStyles.separator} />
                    <MaskInput
                        style={styles.input}
                        value={mobile}
                        onChangeText={masked => {
                            setMobile(masked)
                        }}
                        placeholder='+55 (##) # #### ####'
                        mask={mask}
                        keyboardType='numeric'
                        autoFocus
                     />

                    <Text style={styles.legal}>
                        You must be{' '}
                        <Text style={styles.link} onPress={openLink} >
                            at last 16 years old
                        </Text>{' '}
                        to register. Learn how Malach works with be{' '}
                        <Text style={styles.link} onPress={openLink} >
                            APP Gestão Ltda
                        </Text>
                        .
                    </Text>
                </View>
                <View style={{flex: 1}} />
                <TouchableOpacity
                    disabled={mobile === ''}
                    style={[
                        styles.button,
                        mobile !== '' ? styles.enabled : null
                    ]} 
                    onPress={sendOTP}>
                    <Text style={[
                        styles.buttonText,
                        mobile !== '' ? styles.enabled : null
                    ]}
                    >Next</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
        padding: 20,
        gap: 20
    },
    description: {
        fontSize: 14,
        color: Colors.gray
    },
    list: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 6,
    },
    listItemText: {
        fontSize: 18,
        color: Colors.primary
    },
    legal: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000',
        marginVertical: 20
    },
    link: {
        color: Colors.primary
    },
    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 10
    },
    enabled: {
        backgroundColor: Colors.primary,
        color: '#fff'
    },
    buttonText: {
        color: Colors.gray,
        fontSize: 22,
        fontWeight: '500'
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        fontSize: 16,
        padding: 6,
        marginTop: 10
    },
    loading: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})