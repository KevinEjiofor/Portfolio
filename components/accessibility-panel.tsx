"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useAccessibility } from "@/components/accessibility-provider"
import { Settings, Eye, Volume2, Zap, RotateCcw, X, Accessibility, Monitor } from "lucide-react"

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { settings, updateSetting, resetSettings, prefersReducedMotion } = useAccessibility()

  const settingsGroups = [
    {
      title: "Motion & Animation",
      icon: Zap,
      settings: [
        {
          key: "reducedMotion" as const,
          label: "Reduce Motion",
          description: "Minimize animations and transitions",
          type: "switch" as const,
        },
        {
          key: "cursorEffects" as const,
          label: "Cursor Effects",
          description: "Show interactive cursor trails and effects",
          type: "switch" as const,
        },
        {
          key: "autoplay" as const,
          label: "Autoplay Animations",
          description: "Automatically play animations when visible",
          type: "switch" as const,
        },
        {
          key: "animationSpeed" as const,
          label: "Animation Speed",
          description: "Control the speed of animations",
          type: "select" as const,
          options: [
            { value: "slow", label: "Slow" },
            { value: "normal", label: "Normal" },
            { value: "fast", label: "Fast" },
          ],
        },
      ],
    },
    {
      title: "Visual",
      icon: Eye,
      settings: [
        {
          key: "highContrast" as const,
          label: "High Contrast",
          description: "Increase contrast for better visibility",
          type: "switch" as const,
        },
        {
          key: "largeText" as const,
          label: "Large Text",
          description: "Increase text size throughout the site",
          type: "switch" as const,
        },
        {
          key: "focusIndicators" as const,
          label: "Enhanced Focus",
          description: "Show prominent focus indicators for keyboard navigation",
          type: "switch" as const,
        },
      ],
    },
    {
      title: "Audio & Feedback",
      icon: Volume2,
      settings: [
        {
          key: "announcements" as const,
          label: "Screen Reader Announcements",
          description: "Announce changes and updates to screen readers",
          type: "switch" as const,
        },
      ],
    },
  ]

  return (
    <>
      {/* Accessibility Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg bg-background border-2 hover:scale-110 transition-transform"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="h-5 w-5" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-xl overflow-y-auto">
            <Card className="h-full rounded-none border-0">
              <CardHeader className="sticky top-0 bg-background border-b z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Accessibility className="h-5 w-5" />
                    <CardTitle>Accessibility Settings</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close settings">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Customize your experience for better accessibility and comfort.</CardDescription>

                {/* System Preference Indicator */}
                {prefersReducedMotion && (
                  <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                    <Monitor className="h-4 w-4" />
                    <span className="text-sm">System prefers reduced motion</span>
                    <Badge variant="secondary" className="text-xs">
                      Auto
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                {settingsGroups.map((group) => (
                  <div key={group.title} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <group.icon className="h-4 w-4" />
                      <h3 className="font-semibold">{group.title}</h3>
                    </div>

                    <div className="space-y-4 pl-6">
                      {group.settings.map((setting) => (
                        <div key={setting.key} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <label htmlFor={setting.key} className="text-sm font-medium cursor-pointer">
                                {setting.label}
                              </label>
                              <p className="text-xs text-muted-foreground">{setting.description}</p>
                            </div>

                            {setting.type === "switch" && (
                              <Switch
                                id={setting.key}
                                checked={settings[setting.key] as boolean}
                                onCheckedChange={(checked) => updateSetting(setting.key, checked)}
                                aria-describedby={`${setting.key}-description`}
                              />
                            )}

                            {setting.type === "select" && setting.options && (
                              <Select
                                value={settings[setting.key] as string}
                                onValueChange={(value) => updateSetting(setting.key, value)}
                              >
                                <SelectTrigger className="w-24" id={setting.key}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {setting.options.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />
                  </div>
                ))}

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Quick Actions
                  </h3>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        updateSetting("reducedMotion", true)
                        updateSetting("cursorEffects", false)
                        updateSetting("autoplay", false)
                      }}
                      className="text-xs"
                    >
                      <Zap className="h-3 w-3 mr-1" />
                      Minimal Mode
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        updateSetting("highContrast", true)
                        updateSetting("largeText", true)
                        updateSetting("focusIndicators", true)
                      }}
                      className="text-xs"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      High Visibility
                    </Button>
                  </div>

                  <Button variant="outline" onClick={resetSettings} className="w-full bg-transparent">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset to Defaults
                  </Button>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Keyboard Shortcuts</h3>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Toggle accessibility panel:</span>
                      <Badge variant="outline" className="text-xs">
                        Alt + A
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Skip to main content:</span>
                      <Badge variant="outline" className="text-xs">
                        Tab
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Navigate sections:</span>
                      <Badge variant="outline" className="text-xs">
                        Tab / Shift + Tab
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
