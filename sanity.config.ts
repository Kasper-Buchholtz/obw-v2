'use client'
import '@/styles/studio.css'
import { daDKLocale } from '@sanity/locale-da-dk'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { apiVersion, dataset, projectId } from '@/sanity/lib/sanity.api'
import { schema } from '@/sanity/schemas'
import { linkField } from '~/sanity/schemas/customFields/LinkField/linkField'
import { theme as _theme } from './theme'
import { structure } from './src/sanity/structure'
import * as resolve from '@/sanity/lib/sanity.resolve'
import { presentationTool } from 'sanity/presentation'
import SuperegoLogo from '@/components/sanity/SuperegoLogo'
import { dashboardTool } from '@sanity/dashboard'
import HeroWidget from '@/components/sanity/HeroWidget'
import BannerWidget from '@/components/sanity/BannerWidget'
import NewsWidget from '@/components/sanity/NewsWidget'
import ProjectManagerWidget from '@/components/sanity/ProjectManagerWidget'
import SuperegoWidget from '@/components/sanity/SuperegoWidget'
import LinksWidget from '@/components/sanity/LinksWidget'
import { DocumentStatus } from '~/sanity/lib/sanity.badge'
import { CustomToolMenu } from '~/components/sanity/ToolMenu'
import Sidebar from '~/components/sanity/Sidebar.component'
import { createVisualAction } from '~/sanity/actions/sanity.actions'
import { myTheme } from '~/sanity/lib/sanity.theme'
import {vimeoField} from 'sanity-plugin-vimeo-field'


export default defineConfig({
  basePath: '/super-login',
  name: 'project-name',
  title: 'Superweb Studio',
  subtitle: 'Superweb Studio',
  projectId,
  /* theme: myTheme, */
  icon: SuperegoLogo,
  dataset,
  schema,
  studio: {
    components: {toolMenu: CustomToolMenu},
  },
  plugins: [
    dashboardTool({
      title: 'Startside',
      widgets: [
        {
          name: 'HeroWidget',
          component: HeroWidget,
          layout: { width: 'full' }, // You can adjust the layout width ('small', 'medium', 'full')
        },
        {
          name: 'BannerWidget',
          component: BannerWidget,
          layout: { width: 'full' }, // You can adjust the layout width ('small', 'medium', 'full')
        },
        {
          name: 'links',
          component: LinksWidget,
          layout: { width: 'auto', height: 'large' },
        },
        {
          name: 'NewsWidget',
          component: NewsWidget,
          layout: { width: 'medium', height: 'large' }, // You can adjust the layout width ('small', 'medium', 'full')
        },
        {
          name: 'ProjectManagerWidget',
          component: ProjectManagerWidget,
          layout: { width: 'medium', height: 'medium' }, // You can adjust the layout width ('small', 'medium', 'full')
        },
        {
          name: 'SuperegoWidget',
          component: SuperegoWidget,
          layout: { width: 'medium', height: 'auto' }, // You can adjust the layout width ('small', 'medium', 'full')
        },
      ],
    }),
    structureTool({ structure, title: 'Indhold' }),

    presentationTool({
      resolve,
      /* components: {
        unstable_navigator: {
          component: Sidebar,
          maxWidth: 350,
          minWidth: 150,
        },
      }, */
      title: 'Visuel redigering',
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    vimeoField({
      accessToken: process.env.SANITY_STUDIO_VIMEO_ACCESS_TOKEN,
    }),

    media(),
    visionTool({ defaultApiVersion: apiVersion, title: 'Udviklingsværktøj' }),
    daDKLocale({ title: 'Dansk' }),
    unsplashImageAsset(),
    linkField(),
  ],
  document: {
    actions: (prev, context) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? createVisualAction(originalAction) : originalAction)),

    badges: (prev, context) => {
      if (
        context.schemaType === 'page' ||
        context.schemaType === 'article' ||
        context.schemaType === 'events'
      ) {
        return [DocumentStatus, ...prev]
      }
      return prev
    },
  },

})
