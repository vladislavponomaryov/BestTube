import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Router from 'routes'
import index from 'store'

// add styles
import './assets/style/bootstrap-reboot.min.css'
import './assets/style/iconsFont.css'
import './assets/style/main.sass'
import './assets/style/media.sass'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={index}>
		<Router />
	</Provider>
)
