import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import ExperimentsPagePreview from './preview-templates/ExperimentsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import JournalPagePreview from './preview-templates/JournalPagePreview'
import JournalPostPreview from './preview-templates/JournalPostPreview'
import NetworkPagePreview from './preview-templates/NetworkPagePreview'
import PrivacyPagePreview from './preview-templates/PrivacyPagePreview'
import StudioPagePreview from './preview-templates/StudioPagePreview'
import VenturesPagePreview from './preview-templates/VenturesPagePreview'
import VenturesPostPreview from './preview-templates/VenturesPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('cofounderStartup', StudioPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('enterpriseExperiments', ExperimentsPagePreview)
CMS.registerPreviewTemplate('labExperiments', ExperimentsPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('journalPage', JournalPagePreview)
CMS.registerPreviewTemplate('journal', JournalPostPreview)
CMS.registerPreviewTemplate('network', NetworkPagePreview)
CMS.registerPreviewTemplate('privacy', PrivacyPagePreview)
CMS.registerPreviewTemplate('studioStartup', StudioPagePreview)
CMS.registerPreviewTemplate('upstartsStartup', StudioPagePreview)
CMS.registerPreviewTemplate('ventures', VenturesPagePreview)
CMS.registerPreviewTemplate('venture', VenturesPostPreview)
