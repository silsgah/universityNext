"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle admission application logic here
    console.log('Admission application submitted', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>New Admissions</CardTitle>
          <CardDescription>Apply for admission to our university programs</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="program">Desired Program</Label>
                <Input
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit Application</Button>
        </CardFooter>
      </Card>
    </div>
  );
}