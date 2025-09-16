document.addEventListener('DOMContentLoaded', function() {
    const viewCertificateBtn = document.getElementById('viewCertificateBtn');
    
    viewCertificateBtn.addEventListener('click', function() {
        // You can replace 'certificate.pdf' with the actual name of your PDF file
        const pdfPath = 'certificate.pdf';
        
        // Try to open the PDF in a new tab/window
        try {
            window.open(pdfPath, '_blank');
        } catch (error) {
            // Fallback: create a download link if opening fails
            console.log('Opening PDF in new tab failed, creating download link');
            
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'LIMS_Certificate.pdf';
            link.target = '_blank';
            
            // Temporarily add to DOM and click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
    
    // Add some visual feedback when button is clicked
    viewCertificateBtn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(1px)';
    });
    
    viewCertificateBtn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-1px)';
    });
    
    viewCertificateBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});
